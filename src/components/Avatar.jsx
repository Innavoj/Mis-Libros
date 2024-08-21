import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";


export default function AvatarButton() {
    return (
        <Stack spacing={2}>
        <Avatar src="/src/assets/img/jsi.jpg" sx={{ width: 30, height: 30, bgcolor: deepPurple[500] }} />
        </Stack>
    )
}
