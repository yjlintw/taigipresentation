from PIL import Image

img = Image.open('public/us_map.png')
rgb = img.convert('RGB')
width, height = img.size

max_pink = 0
pink_coord = (0,0)

max_cyan = 0
cyan_coord = (0,0)

max_blue = 0
blue_coord = (0,0)

for y in range(height):
    for x in range(width):
        r, g, b = rgb.getpixel((x, y))
        pink_score = r - g + b
        if pink_score > max_pink:
            max_pink = pink_score
            pink_coord = (x, y)
            
        cyan_score = g + b - r
        if cyan_score > max_cyan:
            max_cyan = cyan_score
            cyan_coord = (x, y)

        blue_score = b - r - g
        if blue_score > max_blue:
            max_blue = blue_score
            blue_coord = (x, y)

print(f"Image size: {width}x{height}")
print(f"Blue (Michigan) is at {blue_coord[0]}, {blue_coord[1]}")
print(f"Pink (Florida) is at {pink_coord[0]}, {pink_coord[1]}")
print(f"Cyan (Washington) is at {cyan_coord[0]}, {cyan_coord[1]}")
