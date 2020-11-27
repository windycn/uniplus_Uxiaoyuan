#coding=utf-8
from selenium import webdriver
import time
import re
import tkinter as tk

# 第1步，实例化object，建立窗口window
window = tk.Tk()
 
# 第2步，给窗口的可视化起名字
window.title('U校园自动填写脚本')
 
# 第3步，设定窗口的大小(长 * 宽)
window.geometry('280x150') 


print("U校园自动填写脚本 v0.1")
print("作者：叶筱")
print('''
说明:
    1、请尊重知识，独立思考后再使用本产品！
    2、本产品暂只支持Google Chrome浏览器
    3、初次启动前请务必按照[说明手册]进行配置
    4、每次启动前务必保证Chrome浏览器已经全部关闭!
    5、出现无法解决的报错请联系作者！
    6、请勿随意传播，应征取作者同意
''')

# 创建浏览器
opt = webdriver.ChromeOptions()
# mydata = r'C:/Users/wy304/AppData/Local/Google/Chrome/User Data'
dirs = input("请按照[说明手册]正确获取到Chrome的个人资料路径：")
datadir = r"/".join(dirs.split('\\')[:-1])
opt.add_argument("--user-data-dir="+datadir)
print("---------------正在打开浏览器---------------")
driver = webdriver.Chrome(options=opt,executable_path='chromedriver.exe')

# U校园登录
print("---------------正在打开U校园页面---------------")
driver.get('https://sso.unipus.cn/sso/login?service=https%3A%2F%2Fu.unipus.cn%2Fuser%2Fcomm%2Flogin%3Fschool_id%3D')   #打开网页
print("---------------请登录您的账号---------------")
def get_answer():
    answer = driver.find_element_by_xpath('//*[@id="answerContent"]')
    # print(answer.text)
    txt = answer.text
    ls = re.split('\n|,',txt)
    print(ls)
    ans = []
    for l in ls:
        if l != '':
            if l.find('|')!= -1:
                l = l.split('|')[0]
            a = re.compile(r'\b[a-zA-Z]+\b',re.I).findall(l)
            ans.append(" ".join(a))
    return ans

def fill(tab):
    a = get_answer()
    # ips = driver.find_elements_by_tag_name(tab)
    ips = driver.find_elements_by_class_name(tab)
    if len(ips)<2: return 1
    index = 0
    for ip in ips:
        ip.send_keys(a[index])
        index = index + 1
    return 0

'''
a = "1"
while a =='1':
    print("&&&若当前页面是填写词组或者问题填空，请执行！暂不支持选择题！")
    try:
        a = '0'
        a = input("请输入'1'开始自动填写(其他字符自动结束）:")
        if a=='1':
            print("---------------正在填写---------------")
            print(get_answer())
            m = fill("input")
            if m==1:
                fill("textarea")
            print("---------------填写完成---------------")
    except:
        print("出现错误请重试，或联系管理人叶筱！")
    print(" ")
'''
def mains():
    print("&&&若当前页面是填写词组或者问题填空，请执行！暂不支持选择题！")
    try:
        print("---------------正在填写---------------")
        print(get_answer())
        m = fill("fill-blank--bc-input-DelG1")
        if m==1:
            fill("writing--textarea-36VPs")
        print("---------------填写完成---------------")
    except Exception as e:
        print("错误为："+ e)
        print("出现错误请重试，或联系管理人叶筱！")
    print(" ")
    
tk.Label(window, text='\n暂时只支持填空或者问答题，\n其余题目不支持！\n').pack()
b = tk.Button(window, text='自动填写',command=mains).pack()
window.mainloop()    
