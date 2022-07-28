import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const myId = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <p>Created at: {toDo?.id}</p>
    </>
  );
}

export default Detail;