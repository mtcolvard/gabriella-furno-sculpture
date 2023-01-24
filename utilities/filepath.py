import os

FOLDER_PATH = r'/Users/matthewtaltycolvard/development/gabriella/sculpture-two/public/sculpture/classical'

def listDir(dir):
    filenames = os.listdir(dir)
    for filename in filenames:
        print(filename)
        print(os.path.abspath(os.path.join(dir, filename)), sep='\n')

if __name__ == '__main__':
    listDir(FOLDER_PATH)
