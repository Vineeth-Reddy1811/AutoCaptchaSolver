import numpy as np
from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver
import urllib
import lxml
import cv2
import re


driver = webdriver.Chrome(r'/Users/vineeth/PROJECTS/ACS/chromedriver')
driver.get('file:///Users/vineeth/PROJECTS/ACS/AutoCaptcha.html')
res = driver.execute_script('return document.documentElement.outerHTML')
soup = BeautifulSoup(res, 'lxml')
box = soup.find('img')
print(box)
images = soup.find_all('img',{'src':re.compile('.png')})

for image in images:

    print(image['src'])
    iurl= ("file:///Users/vineeth/PROJECTS/ACS/"+ image['src'])
    i=1
    try:

        request = urllib.request.Request(iurl)
        response = urllib.request.urlopen(request)
        binary_str = response.read()
        byte_array = bytearray(binary_str)
        numpy_array = np.asarray(byte_array, dtype='uint8')
        image = cv2.imdecode(numpy_array, cv2.IMREAD_UNCHANGED)

        cv2.imwrite("images/" + '{:04d}'.format(i) + '.png', image)
        print("saved")
        i = i + 1


    except Exception as e:
        print(str(e))