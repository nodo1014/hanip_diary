// edit:id 받기. useParams, react-router-dom
import { useParams } from "react-router-dom";

const Edit = () => {
 const params = useParams();
 console.log(params.id);
    return (
      <div>
       Edit : params:id 는 {params.id}
      </div>
    );

};
export default Edit;
