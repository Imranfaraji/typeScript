// type UsserRole='Admin'|'Editor'|'Viewer';


enum UserRole {
    Admin="Admin",
    Editor='Editor',
    Viewer='Viewer'
}
const canEdit=(role:UserRole)=>{
    if(role===UserRole.Admin || role=== UserRole.Editor){
        return true
    }else return false
}

const isEditable=canEdit(UserRole.Admin)

console.log(isEditable)