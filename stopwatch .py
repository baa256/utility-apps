import tkinter as tk 

#main window
root = tk.Tk()
root.geometry('485x220')
root.title('StopWatch')

#time display label
stopwatch_label = tk.Label(text='00:00:00' , font=('Verdana' , 20))
stopwatch_label.pack()
#pack into window 



#variables 
running = False
#time vars
hours,minutes,seconds = 0,0,0

#use global vars or use a class and a subclass 

def start():
    global running
    if not running:
        update()
        running = True

def pause():
    global running
    if running:
        stopwatch_label.after_cancel(update_time)
        running = False

def reset():
    global running
    if running: 
        stopwatch_label.after_cancel(update_time)
        running = False
    #set variables back to zero 
    global hours, minutes, seconds
    hours , minutes, seconds = 0, 0, 0 
    #set label back to zero 
    stopwatch_label.config(text='00:00:00')

def update():
    global hours, minutes, seconds
    seconds += 1 
    if seconds == 60:
        minutes += 1
        seconds = 0 
    if minutes == 60:
        hours += 1 
        minutes = 0 

    #format time to include leading zeros 
    hours_string = f'{hours}' if hours > 9 else f'0{hours}'
    minutes_string = f'{minutes}' if minutes > 9 else f'0{minutes}'
    seconds_string = f'{seconds}' if seconds > 9 else f'0{seconds}'

    #update timer label after 1000 ms or 1 second 
    stopwatch_label.config(text = hours_string + ': ' + minutes_string + ': ' + seconds_string)

    global update_time 
#1000 ms or 1 second 
    update_time = stopwatch_label.after(1000, update)


    

    



#buttons
start_btn = tk.Button(text='START' , height=5 , width = 7 , font = ('Verdana,22') , command = start )
start_btn.pack(side=tk.LEFT)

pause_btn = tk.Button(text='PAUSE' , height=5 , width = 7 , font = ('Verdana,22') , command = pause )
pause_btn.pack(side=tk.LEFT)

reset_btn = tk.Button(text='RESET' , height=5 , width = 7 , font = ('Verdana,22') , command = reset )
reset_btn.pack(side=tk.LEFT)

quit_btn = tk.Button(text='QUIT' , height=5 , width = 7 , font = ('Verdana,22') , command = root.quit )
quit_btn.pack(side=tk.LEFT)



#main loop to run app 
root.mainloop()

