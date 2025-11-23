import os
from PIL import Image

def compress_images(folder_path, output_folder, quality=70):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(folder_path, filename)
            output_path = os.path.join(output_folder, filename)

            try:
                with Image.open(input_path) as img:
                    # Convert PNG to RGB before saving as JPEG
                    if filename.lower().endswith('.png'):
                        img = img.convert('RGB')
                        output_path = output_path.rsplit('.', 1)[0] + '.jpg'

                    img.save(output_path, optimize=True, quality=quality)
                    print(f"Compressed: {filename} → {os.path.basename(output_path)}")
            except Exception as e:
                print(f"Error compressing {filename}: {e}")

# Example usage
compress_images('/home/vincent/Desktop/img_small/', '/home/vincent/Desktop/img/', quality=12)
