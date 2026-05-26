import os
from PIL import Image

panels_dir = './public/product_panels'
results = {}

if not os.path.exists(panels_dir):
    print(f"Directory {panels_dir} does not exist.")
    exit(1)

for filename in sorted(os.listdir(panels_dir)):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        continue
        
    filepath = os.path.join(panels_dir, filename)
    try:
        with Image.open(filepath) as img:
            width, height = img.size
            if width < 100 or height < 100:
                continue
                
            # Convert to RGB to ensure standard channel access
            img_rgb = img.convert('RGB')
            
            left_white = 0
            right_white = 0
            
            # Sample pixels
            # We can check a grid of pixels to be fast and accurate
            step_x = max(1, width // 100)
            step_y = max(1, height // 100)
            mid_x = width // 2
            
            for y in range(0, height, step_y):
                for x in range(0, width, step_x):
                    r, g, b = img_rgb.getpixel((x, y))
                    # Threshold for white background
                    is_white = r > 240 and g > 240 and b > 240
                    
                    if x < mid_x:
                        if is_white:
                            left_white += 1
                    else:
                        if is_white:
                            right_white += 1
            
            # The side with MORE white pixels is the text details side.
            # The side with LESS white pixels contains the colorful product packaging.
            if left_white > right_white:
                packaging_side = 'right'
            else:
                packaging_side = 'left'
                
            results[filename] = {
                'packaging_side': packaging_side,
                'left_white': left_white,
                'right_white': right_white
            }
            print(f"{filename}: Packaging on the {packaging_side} (Left White: {left_white}, Right White: {right_white})")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Save results to a JSON file for the enrichment script
import json
output_json_path = './scripts/crop_map.json'
with open(output_json_path, 'w', encoding='utf-8') as f:
    json.dump({k: v['packaging_side'] for k, v in results.items()}, f, indent=2)
print(f"\nSaved crop map to {output_json_path}")
