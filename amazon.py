#Import the datetime class from the datetime
#module so that it can be used in this program
import csv
from datetime import datetime
from modulefinder import STORE_NAME
import pandas as pd

#THIS IS THE MAIN FUNCTION THAT WILL BE CALLING:
#STORE NAME
#READ LIST FUNCTON
#MEAN FUNCTION
def main():
    STORE_NAME = "AMAZON ORDER ANALYZER"
    print(STORE_NAME)
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    print(df)
    print()
    print("STATS")
    print(f'SUM: ${read_sum():.2f}')
    print(f'MEAN: {read_mean():.2f}')
    print(f'MEDIAN: {read_median():.2f}')
    print()
    print(f'TOTAL # OF ITEMS PURCHASE: {read_count()} ')
    print(f'HIGHEST PURCHASE: {highest_purchase()}')
    print(f'LOWEST PURCHASE: {lowest_purchase()}')
    
#this function will display a neat table for the reader
#to read all their orders from a time range of a mock csv order
#history file  
def read_sum():   
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)

    #this finds the sum of all your total spending on Amazon
    amazon_sum = df['Total'].sum()
    return amazon_sum

def read_mean():
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    #this finds the mean of all your total spending on Amazon
    amazon_mean = df['Total'].mean()
    return amazon_mean

def read_count():
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    amazon_count = df['quantity'].count()
    return amazon_count

def read_median():
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    amazon_median = df['Total'].median()
    return amazon_median

def highest_purchase():
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    amazon_highest = df['Total'].max()
    return amazon_highest

def lowest_purchase():
    data = pd.read_csv('order_history.csv')
    df = pd.DataFrame(data)
    amazon_lowest = df['Total'].min()
    return amazon_lowest
#this function will display the

    
       
    
if __name__ == "__main__":
    main()
        