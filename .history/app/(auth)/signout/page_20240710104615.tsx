import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Signout = () => {
  return (
    <div className="w-full h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Logout</CardTitle>
          <CardDescription>
            Please logout by clicking on logout button!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Signout</Button>
        </CardContent>
        <CardFooter>Copyright MyCompany.Com</CardFooter>
      </Card>
    </div>
  );
};

export default Signout;
