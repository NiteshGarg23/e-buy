// utility function to check if currentUser is an admin
export const checkUserIsAdmin = currentUser => {
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    const { userRoles } = currentUser;
    if(userRoles.includes('admin')) return true;

    return false;
}