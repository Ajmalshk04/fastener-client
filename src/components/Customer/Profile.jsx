import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  fetchUserProfile,
  updateProfile,
  updatePassword,
} from "@/api/services/profileService";

const AccountDetails = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { user, profile, loading } = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState({
    profile: false,
    billing: false,
    shipping: false,
  });
  const [editedUser, setEditedUser] = useState(null);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const [editedProfile, setEditedProfile] = useState(null);

  useEffect(() => {
    if (user && profile) {
      const { _id, __v, createdAt, updatedAt, ...userData } = user;
      setEditedUser(userData);

      const {
        _id: profileId,
        __v: profileV,
        user: profileUser,
        ...profileData
      } = profile;
      // Remove _id from nested objects
      if (profileData.billingAddress) {
        delete profileData.billingAddress._id;
      }
      if (profileData.shippingAddresses) {
        profileData.shippingAddresses = profileData.shippingAddresses.map(
          ({ _id, ...address }) => address
        );
      }
      setEditedProfile(profileData);
    }
  }, [user, profile]);

  const handleEditClick = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: true }));
  };

  const handleCancelEdit = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: false }));
    setEditedUser({ ...user });
  };

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "profile") {
      setEditedUser((prev) => ({ ...prev, [name]: value }));
    } else if (section === "billing") {
      setEditedProfile((prev) => ({
        ...prev,
        billingAddress: { ...prev.billingAddress, [name]: value },
      }));
    } else if (section === "shipping") {
      setEditedProfile((prev) => ({
        ...prev,
        shippingAddresses: prev.shippingAddresses.map((address, index) =>
          index === 0 ? { ...address, [name]: value } : address
        ),
      }));
    }
  };

  const handleSaveChanges = async (section) => {
    try {
      let updateData;
      if (section === "profile") {
        const { _id, __v, createdAt, updatedAt, ...profileData } = editedUser;
        updateData = profileData;
      } else {
        const { _id, __v, user, ...profileData } = editedProfile;
        // Remove _id from nested objects
        if (profileData.billingAddress) {
          delete profileData.billingAddress._id;
        }
        if (profileData.shippingAddresses) {
          profileData.shippingAddresses = profileData.shippingAddresses.map(
            ({ _id, ...address }) => address
          );
        }
        updateData = profileData;
      }
      await dispatch(updateProfile(updateData)).unwrap();
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      setIsEditing((prev) => ({ ...prev, [section]: false }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleResetPassword = async () => {
    try {
      const passwordData = { oldPassword, newPassword };
      await dispatch(updatePassword(passwordData)).unwrap();
      toast({
        title: "Success",
        description: "Password has been reset successfully.",
      });
      setIsResetPasswordOpen(false);
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reset password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderProfileFields = () => {
    if (!editedUser) return null;

    const fields = [
      { label: "First Name", name: "firstName" },
      { label: "Last Name", name: "lastName" },
      { label: "Company", name: "company" },
      { label: "Phone Number", name: "phoneNumber" },
      { label: "Email", name: "email" },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            {isEditing.profile ? (
              <Input
                id={field.name}
                name={field.name}
                value={editedUser[field.name] || ""}
                onChange={(e) => handleInputChange(e, "profile")}
              />
            ) : (
              <p className="text-sm text-gray-500">{editedUser[field.name]}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const billingFields = [
    { label: "Address", name: "addressLine1" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Zip Code", name: "zipCode" },
  ];

  const renderBillingFields = () => {
    if (!editedProfile || !editedProfile.billingAddress) return null;

    const billingAddress = editedProfile.billingAddress;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {billingFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={`billing${field.name}`}>{field.label}</Label>
            {isEditing.billing ? (
              <Input
                id={`billing${field.name}`}
                name={field.name}
                value={billingAddress[field.name] || ""}
                onChange={(e) => handleInputChange(e, "billing")}
              />
            ) : (
              <p className="text-sm text-gray-500">
                {billingAddress[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const shippingFields = [
    { label: "Address", name: "addressLine1" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Zip Code", name: "zipCode" },
  ];

  const renderShippingFields = () => {
    if (!editedProfile || !editedProfile.shippingAddresses) return null;

    return (
      <div className="space-y-4">
        {editedProfile.shippingAddresses.map((address, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shippingFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={`shipping${field.name}-${index}`}>
                  {field.label}
                </Label>
                {isEditing.shipping ? (
                  <Input
                    id={`shipping${field.name}-${index}`}
                    name={field.name}
                    value={address[field.name] || ""}
                    onChange={(e) => handleInputChange(e, "shipping")}
                  />
                ) : (
                  <p className="text-sm text-gray-500">{address[field.name]}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-xl font-bold mb-8 text-center">Account Settings</h1>

      <Tabs defaultValue="profile" className="space-y-8">
        <div className="flex items-center justify-center">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="profile">
          <Card className="mx-2 lg:mx-56">
            <CardHeader>
              <CardTitle>User Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderProfileFields()}
              <div className="flex flex-wrap gap-4 pt-4">
                {isEditing.profile ? (
                  <>
                    <Button
                      onClick={() => handleSaveChanges("profile")}
                      className="text-white"
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleCancelEdit("profile")}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    className="text-white"
                    onClick={() => handleEditClick("profile")}
                  >
                    Edit Profile Details
                  </Button>
                )}
                <Dialog
                  open={isResetPasswordOpen}
                  onOpenChange={setIsResetPasswordOpen}
                >
                  <DialogTrigger asChild>
                    <Button variant="outline">Reset Password</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[425px] lg:max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Reset Password</DialogTitle>
                      <DialogDescription>
                        Enter your new password below. We recommend using a
                        strong, unique password.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="old-password" className="text-right">
                          Old Password
                        </Label>
                        <Input
                          id="old-password"
                          type="password"
                          className="col-span-3"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="new-password" className="text-right">
                          New Password
                        </Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="col-span-3"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        className="text-white"
                        onClick={handleResetPassword}
                      >
                        Reset Password
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="mx-2 lg:mx-56">
            <CardHeader>
              <CardTitle>Billing Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderBillingFields()}
              <div className="flex flex-wrap gap-4 pt-4">
                {isEditing.billing ? (
                  <>
                    <Button
                      onClick={() => handleSaveChanges("billing")}
                      className="text-white"
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleCancelEdit("billing")}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    className="text-white"
                    onClick={() => handleEditClick("billing")}
                  >
                    Edit Billing Details
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card className="mx-2 lg:mx-56">
            <CardHeader>
              <CardTitle>Shipping Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {renderShippingFields()}
              <div className="flex flex-wrap gap-4 pt-4">
                {isEditing.shipping ? (
                  <>
                    <Button
                      onClick={() => handleSaveChanges("shipping")}
                      className="text-white"
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleCancelEdit("shipping")}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    className="text-white"
                    onClick={() => handleEditClick("shipping")}
                  >
                    Edit Shipping Details
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountDetails;
//===============================================
