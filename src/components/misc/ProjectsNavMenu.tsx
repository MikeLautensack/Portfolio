import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  // Hooks
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isProjectsRoute = /^\/projects/.test(pathname);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
            className={`${isProjectsRoute ? "text-[#31B0E9]" : "text-white"}`}
          />
        }
      >
        <Typography
          variant="h6"
          className={`${isProjectsRoute ? "text-[#31B0E9]" : "text-white"}`}
        >
          Projects
        </Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        color="#243680"
      >
        <Typography variant="body1" className="pl-2">
          Projects Catagories
        </Typography>

        <Link href="/projects?tab=fullstack-webapps">
          <MenuItem onClick={handleClose} disableRipple>
            Full-Stack Webapps
          </MenuItem>
        </Link>
        <Link href="/projects?tab=apis">
          <MenuItem onClick={handleClose} disableRipple>
            APIs
          </MenuItem>
        </Link>
        <Link href="/projects?tab=microservices">
          <MenuItem onClick={handleClose} disableRipple>
            Microservice APIs
          </MenuItem>
        </Link>
        <Link href="/projects?tab=course-projects">
          <MenuItem onClick={handleClose} disableRipple>
            Course Projects
          </MenuItem>
        </Link>
        <Link href="/projects?tab=all-projects">
          <MenuItem onClick={handleClose} disableRipple>
            All Projects
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
