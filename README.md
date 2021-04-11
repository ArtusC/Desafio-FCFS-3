# Desafio-FCFS-3

1) Clone the repo.

2) Access the folder Desafio-FCFS-3.

3) Inside de folder, in terminal, run:   
  kubectl apply -f k8s/des2-api/deploy.yaml  
  kubectl expose -f k8s/des2-api/deploy.yaml  
  kubectl port-forward service/des2-api-route 3000  

4) Open another terminal, in same folder, and run:  
  kubectl apply -f k8s/des2-app/deploy.yaml  
  kubectl expose -f k8s/des2-app/deploy.yaml  
  kubectl port-forward service/des2-app-route 3001:3000  

5) Access, via browser: http://localhost:3001/

-----------------------------------------------------
To stop the kubernetes service, run in terminal:  
  kubectl delete service des2-api-route  
  kubectl delete service des2-app-route  
  kubectl delete deployment des2-api-route  
  kubectl delete deployment des2-app-route  
  delete po --all  
  
