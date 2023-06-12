"use client"
import { useState } from 'react'
import { useSession } from 'next-auth/react' //to know which user is currently logged in
import { useRouter } from 'next/navigation'
import Form from '@/components/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: ","
    })

    const createPrompt = async (e) => {

    }

  return (
    <Form
    type ="Create"
    post ={post}
    setPost ={setPost}
    submitting ={submitting}
    handleSubmit = {createPrompt}
    />
  )
}

export default CreatePrompt