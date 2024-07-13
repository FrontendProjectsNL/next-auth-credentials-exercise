import SigninComponent from '@/components/SigninComponent';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Signin = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please login by clicking on login button!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninComponent />
        </CardContent>
        <CardFooter>Copyright MyCompany.Com</CardFooter>
      </Card>
    </div>
  );
};

export default Signin;
