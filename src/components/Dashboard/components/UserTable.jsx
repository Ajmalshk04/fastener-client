import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

const UserListTable = () => {
  const { token } = useAuth();

  const fetchUsers = async () => {
    const response = await axiosInstance.get("/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const statusColors = {
    active: "text-green-600 bg-green-50 border border-green-600",
    inactive: "text-white bg-gray-500",
    pending: "text-black bg-yellow-400",
  };

  return (
    <div className="container mx-auto my-6 p-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-3 px-4 text-left">Name</TableHead>
            <TableHead className="py-3 px-4 text-left">Email</TableHead>
            <TableHead className="py-3 px-4 text-left">Phone</TableHead>
            <TableHead className="py-3 px-4 text-left">Company</TableHead>
            <TableHead className="py-3 px-4 text-left">Role</TableHead>
            <TableHead className="py-3 px-4 text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            // Render skeleton loaders while data is being fetched
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-3/4" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-3/4" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-1/2" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-1/2" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-1/4" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-1/4" />
                </TableCell>
              </TableRow>
            ))
          ) : error ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-red-500">
                Error: {error.message}
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user._id}>
                <TableCell className="py-3 px-4">
                  {user?.firstName} {user?.lastName}
                </TableCell>
                <TableCell className="py-3 px-4">{user?.email}</TableCell>
                <TableCell className="py-3 px-4">{user?.phoneNumber}</TableCell>
                <TableCell className="py-3 px-4">{user?.company}</TableCell>
                <TableCell className="py-3 px-4">{user?.role}</TableCell>
                <TableCell className="py-3 px-4">
                  <Badge
                    className={
                      user?.isVerified
                        ? statusColors["active"]
                        : statusColors["pending"]
                    }
                  >
                    {user?.isVerified ? "Verified" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserListTable;
