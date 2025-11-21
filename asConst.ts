// const assertion => enum er biporit





const UserRol = {
    Admin: "Admin",
    Editor: 'Editor',
    Viewer: 'Viewer'
} as const

const canEditable = (role: keyof typeof UserRol) => {
    if (role === UserRol.Admin || role === UserRol.Editor) {
        return true
    } else return false
}

const isEdite = canEditable(UserRol.Admin)

console.log(isEdite)