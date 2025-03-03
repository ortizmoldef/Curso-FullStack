"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

const MyMenu = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Menú
            </MenuButton>

            <MenuItems className="absolute mt-2 w-48 bg-white shadow-md rounded-md border">
                <MenuItem>
                    {({active}) => (
                        <a
                        href="#"
                        className= {` block px-4 py-2 ${active ? "bg-gray-100" : "" 
                        }`}
                        >
                            Opción 1
                        </a>
                    )}
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}

export default MyMenu