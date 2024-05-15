import pyautogui as pyg
import time

pyg.FAILSAFE = False

while True:
    time.sleep(15)
    for i in range(0,100):
        pyg.moveTo(0, 1*5)
    for i in range(0,3):
        pyg.press('shift')
