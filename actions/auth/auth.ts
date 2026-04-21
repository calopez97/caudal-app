'use server'

import { createClient } from '@/lib/supabase/server'
import { LoginFormData, RegisterFormData } from '@/lib/models/auth/auth.models'

export async function login(formData: LoginFormData) {
  const supabase = await createClient()

  

  const { error, data } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    
    return { 
        success: false,
        message: error.message,
    }
  }


  return {
    success: true,
    message: 'Usuario autenticado correctamente.',
    data
  }
}

export async function signup(formData: RegisterFormData) {
  const supabase = await createClient()

  const { error, data } = await supabase.auth.signUp({ 
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name
      }
    }
  });

  if (error) {
    return{
        success: false,
        message: error.message,
    }
  }

  return{
    success: true,
    message: 'Usuario registrado correctamente. Por favor, verifica tu correo para activar tu cuenta.', 
    data
   }
}