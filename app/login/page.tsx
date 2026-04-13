'use client'


import { LoginComponent } from '@/components/Auth/login';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react'

export default function Login() {

  return (
    
      <LoginComponent />
    
  )
}