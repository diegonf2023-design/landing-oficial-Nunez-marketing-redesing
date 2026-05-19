import os
from PIL import Image

def rotate_image():
    target_image = "/Users/diegonunez/Landing - marketing/public/images/699e43032837e85374500857.webp"
    
    if os.path.exists(target_image):
        print(f"Rotating {target_image}...")
        try:
            img = Image.open(target_image)
            # Currently horizontal with head on the left.
            # Rotating 90 degrees clockwise (-90) will make it vertical with head at the top.
            rotated_img = img.rotate(-90, expand=True)
            rotated_img.save(target_image, format="WebP", quality=80)
            print("Successfully rotated and saved image.")
        except Exception as e:
            print(f"Error rotating image: {e}")
    else:
        print("Image not found.")

if __name__ == "__main__":
    rotate_image()
