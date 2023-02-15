import {
  Button,
  Card,
  Checkbox,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineMail, AiTwotoneLock } from "react-icons/ai";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  // console.log(email, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      comment: comment,
    };
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-lg">
      <form className="mx-auto flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" className="font-bold " />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            icon={AiOutlineMail}
            required={true}
            addon="@"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            icon={AiTwotoneLock}
            placeholder="********"
            helperText={
              <>
                We'll never share your details. Read our{" "}
                <a
                  href="/forms"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
          />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
