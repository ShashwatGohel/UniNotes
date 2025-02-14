import numpy as np
from scipy.special import comb
alpha = 0.99
prob_to_get = 0.5

def conviction_probability(beta):
    p_guilty = (alpha * sum(comb(15, i) * (beta ** i) * ((1 - beta) ** (15 - i)) 
    for i in range(10, 16)))
    p_not_guilty = ((1 - alpha) * sum(comb(15, i) * (beta ** i) * ((1 - beta) ** (15 - i)) 
    for i in range(6, 16)))
    return p_guilty + p_not_guilty

beta_values = np.linspace(0, 1, 1000)
prob_values = [conviction_probability(beta) for beta in beta_values]

min_beta = 1
for beta, prob in zip(beta_values, prob_values):
    if prob >= prob_to_get:
        optimal_beta = beta
        print(beta)
        break