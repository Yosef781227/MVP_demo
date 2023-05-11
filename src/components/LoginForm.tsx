import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';

type LoginFormProps = {
  onSubmit: (jsonInput: string) => void;
};

function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const jsonInput = JSON.stringify({ username, password });
    onSubmit(jsonInput);
  };

  return (
    <Box>
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleLogin}>Submit</Button>
    </Box>
  );
}

export default LoginForm;
