import os

def replace_ad_type(directory):
    types = ['note', 'warning', 'example', 'quote', 'attention']
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            with open(file_path, "r") as f:
                lines = f.readlines()
            with open(file_path, "w") as f:
                for line in lines:
                    for type in types:
                        str = '```ad-' + type
                        if  str in line:
                            # 随机选择一个 type
                            line = line.replace(str, f"{{{{< admonition {type} >}}}}")
                    f.write(line)

replace_ad_type("./")

