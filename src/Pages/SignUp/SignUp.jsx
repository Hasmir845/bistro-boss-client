import React from 'react';
import { useForm } from 'react-hook-form';



const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-4">Sign up now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
          {errors.name && <span className=' text-red-600'>Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"/>
          {errors.email && <span className=' text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <span className=' text-red-600'>Password must be at least 6 characters</span>}
          {errors.password?.type === 'mangth' && <span className=' text-red-600'>Password must be at least 6 characters</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;