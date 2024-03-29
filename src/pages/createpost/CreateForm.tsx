import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { addDoc,collection } from 'firebase/firestore';
import { auth,db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Form.css"; 
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
    title:string;
    description:string;
}
export default function CreateForm(){

    const [user] =  useAuthState(auth);
    const navigate = useNavigate()
    
    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description:yup.string().required("You must add a description"),

    });

    const {register,handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver:yupResolver(schema),
    })

    const postRef = collection(db,"posts")

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postRef,{
            ...data,
            username:user?.displayName,
            userid:user?.uid,
        })

        navigate("/");
    }
    
    return(
        <div className="form-container">
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder='Title..' {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea placeholder='Description..' {...register("description")} />
        <p>{errors.description?.message}</p>
        <input type="submit" />
      </form>
    </div>
    );
}