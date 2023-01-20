import os
import re


def replace_word(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            with open(file_path, 'r') as f:
                content = f.read()
            match = re.search(r'**(.*?)**', content)
            if match:
                new_content = re.sub(r'**(.*?)**', r'**\1**', content)
                with open(file_path, 'w') as f:
                    f.write(new_content)

def replace_ad(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            with open(file_path, 'r') as f:
                content = f.read()
            match = re.search(
                r'```(ad-note|ad-hint|ad-warning|ad-example|ad-attention)\n```cpp\n(.*?)```', content, re.DOTALL)
            if match:
                new_content = re.sub(r'```(ad-note|ad-hint|ad-warning|ad-example|ad-attention)\n```cpp\n(.*?)```',
                                     r'{{< admonition \1 >}}\2 {{< /admonition >}}', content, re.DOTALL)
                with open(file_path, 'w') as f:
                    f.write(new_content)


replace_word("./")
# replace_ad("./")
