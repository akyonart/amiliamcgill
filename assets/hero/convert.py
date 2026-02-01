import json

# Configuration
input_file = 'signature.json'
output_file = 'signature_black.json'
# The specific normalized white color from your file
old_color = [0.988235294118, 0.988235294118, 0.996078431373, 1]
new_color = [0, 0, 0, 1]

def process_node(node):
    if isinstance(node, dict):
        # Look for color 'k' arrays
        if 'k' in node and node['k'] == old_color:
            node['k'] = new_color
        # Check for color properties inside strokes 'c'
        if 'c' in node and isinstance(node['c'], dict):
            if 'k' in node['c'] and node['c']['k'] == old_color:
                node['c']['k'] = new_color
        
        for key in node:
            process_node(node[key])
    elif isinstance(node, list):
        for item in node:
            process_node(item)

try:
    with open(input_file, 'r') as f:
        data = json.load(f)

    process_node(data)

    with open(output_file, 'w') as f:
        json.dump(data, f, separators=(',', ':'))

    print(f"Success! Created {output_file} with black strokes.")

except FileNotFoundError:
    print(f"Error: Could not find {input_file} in this folder.")
except Exception as e:
    print(f"An error occurred: {e}")