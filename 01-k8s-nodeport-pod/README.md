# Tutorial
First start minikube:
```
minikube start
```

Update the two objects that we have defined
```
kubectl apply -f hello-pod.yml
kubectl apply -f hello-service.yml
```

Check that the app is working (we get the IP from minikube):
```
curl $(minikube ip):30000/name/Andreas
curl $(minikube ip):30000/name/Peter
curl $(minikube ip):30000/name/Colby
curl $(minikube ip):30000/name/Daniel
curl $(minikube ip):30000/name/Faith
```

Cleanup k8s:
```
kubectl delete service hello-service
kubectl delete pod hello-pod
```

To stop the MiniKube VM:
```
minikube stop
```

You can also delete the VM:
```
minikube delete
```