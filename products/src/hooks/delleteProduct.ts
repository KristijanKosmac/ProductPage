import { useEffect, useState } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const Delete = (id: string) => {
  useEffect(() => {
    const collectionRef = projectFirestore.collection("products");

    async () => {
      collectionRef.onSnapshot((snap) => {
        snap.forEach((doc) => {
          if (doc.id === id) {
            collectionRef.doc(id).delete();
          }
        });
      });
    };
  });
};

export default Delete;
