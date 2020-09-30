import { useEffect, useState } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file: any, price: number, title: string, id: any) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("products");
    var flag = false;
    var tmp = "";
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err: any) => {
        setError(err);
      },
      async () => {
        collectionRef.onSnapshot((snap) => {
          snap.forEach((doc) => {
            if (doc.id === id) {
              collectionRef.doc(id).delete();
              flag = true;
              // tmp = doc.url;
            }
          });
        });

        var url: string = "";
        if (flag) {
          url = tmp;
        } else {
          url = await storageRef.getDownloadURL();
        }

        const createdAt = timestamp();
        const quantity = 0;
        collectionRef.add({ title, price, url, createdAt, quantity });
        setUrl(url);
      }
    );
  }, [file]);
  return { url, error, progress };
};

export default useStorage;
