import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";

export default function CreatorExplore() {
    return (
      <PrivateRoute allowedRoles={['creator']}>
        <Allcreators/>
      </PrivateRoute>
    );
  }
  