const saveData = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //console.log(firestore);
    firestore
      .collection("employees")
      .add({
        ...data
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
};

export default saveData;
