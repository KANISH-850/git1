import matplotlib.pyplot as plt

epochs = [1, 2, 3, 4, 5]
accuracy = [0.6, 0.72, 0.85, 0.9, 0.95]

plt.plot(epochs, accuracy)
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.title('Model Accuracy Over Epochs')
plt.show()
