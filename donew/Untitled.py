#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd


# In[16]:


# Importing the dataset
dataset = pd.read_csv('Data/Dataset completed1.csv')
X = dataset.iloc[:, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]].values
y = dataset.iloc[:, 16].values
dataset.head()


# In[17]:


# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.35, random_state = 0)


# In[27]:


from sklearn.svm import SVC
classifier = SVC(kernel = 'linear')
classifier.fit(X_train, y_train)


# In[29]:


# Predicting the Test set results
y_pred = classifier.predict(X_test)


# In[37]:


# Predicting the Test set results
y_pred = classifier.predict([[2,0,2,2,0,0,0,2,2,0,0,0,0,1,0]])
print (y_pred)


# In[ ]:




