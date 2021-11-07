#!/usr/bin/env python
from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for
from predictor import name_print
#from weather import query_api

app = Flask(__name__)
@app.route('/')
def index():    
    return render_template('index.html')

@app.route("/result" , methods=['GET', 'POST'])
def result():    
    data = []    
    error = None    
    fname = request.form.get('fname')
    lname = request.form.get('lname')
    resp = name_print(fname, lname)    
    pp(resp)    
    if resp:       
        data.append(resp)    
    if len(data) != 2:        
        error = 'Bad Response from Weather API'    
    return render_template('result.html', data=data, error=error)

if __name__=='__main__':    
    app.run(debug=True)

