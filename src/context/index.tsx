"use client";
import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StyleIcon from "@mui/icons-material/Style";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ReactNode } from "react";

type userIdContextType = {
  userId: string | null;
  isSignedIn: boolean;
  quickLink: quickLinksType[];
  secondaryLink: secondaryLinkType[];
  setterActive: (id: number) => void;
  setterSecondaryActive: (id: number) => void;
  setterTheme: (id: number) => void;
  themeSwitch: themeArrayType[];
  isLightThemeActive: () => boolean;
  languageOptions: languageOptionsType[];
  toggleForm: () => void;
  showForm: boolean;
  snippets: SnippetType[];
  addSnippet: (snippet: SnippetType) => void;
  deleteSnippet: (index: number) => void;
  seeTagBar: boolean;
  tagsToggle: () => void;
  addTags: (tag: TagsType) => void;
  showNewTagMenu: () => void;
  newTagMenu: boolean;
  tags: TagsType[];
  deleteTag: (id: number) => void;
  handleEditing: () => void;
  startEditingTag: (index: number) => void;
  updateTag: (index: number, newName: string) => void;
  cancelEditing: () => void;
  editingTagIndex: number | null;
};
type ChildrenType = {
  children: ReactNode;
};

const Context = createContext<userIdContextType | null>(null);

type quickLinksType = {
  id: number;
  name: string;
  isActive: boolean;
  icon: ReactNode;
};

const quickLinks: quickLinksType[] = [
  {
    id: 1,
    name: "All Snippets",
    isActive: true,
    icon: <GridOnIcon />,
  },
  {
    id: 2,
    name: "Favourite",
    isActive: false,
    icon: <FavoriteBorderIcon />,
  },
  {
    id: 3,
    name: "Trash",
    isActive: false,
    icon: <DeleteOutlineIcon />,
  },
];
type secondaryLinkType = {
  id: number;
  name: string;
  isActive: boolean;
  icon: ReactNode;
};
const secondaryLinks: secondaryLinkType[] = [
  {
    id: 1,
    name: "Tags",
    isActive: false,
    icon: <StyleIcon />,
  },
  {
    id: 2,
    name: "Logout",
    isActive: false,
    icon: <LogoutIcon />,
  },
];

type themeArrayType = {
  id: number;
  icon: ReactNode;
  IsActivated: boolean;
  name: string;
};

const themeArray: themeArrayType[] = [
  {
    id: 1,
    icon: <LightModeIcon sx={{ fontsize: 18 }} />,
    IsActivated: true,
    name: "light",
  },
  {
    id: 2,
    icon: <DarkModeIcon sx={{ fontSize: 18 }} />,
    IsActivated: false,
    name: "false",
  },
];
type languageOptionsType = {
  value: string;
  label: string;
  id: string;
};

const languageOptions: languageOptionsType[] = [
  { value: "javascript", label: "JavaScript", id: "js" },
  { value: "cpp", label: "Python", id: "py" },
  { value: "ruby", label: "Ruby", id: "ruby" },
  { value: "csharp", label: "C#", id: "c#" },
  { value: "php", label: "PHP", id: "php" },
  { value: "swift", label: "Swift", id: "swift" },
  { value: "go", label: "Go", id: "go" },
  { value: "kotlin", label: "Kotlin", id: "kotlin" },
  { value: "rust", label: "Rust", id: "rust" },
  { value: "typescript", label: "TypeScript", id: "ts" },
  { value: "haskell", label: "Haskell", id: "haskell" },
  { value: "pearl", label: "Pearl", id: "pearl" },
  { value: "c", label: "C", id: "c" },
  { value: "r", label: "R", id: "r" },
  { value: "elixir", label: "Elixir", id: "elixir" },
  { value: "node", label: "Node", id: "node" },
];

type SnippetType = {
  title: string;
  description: string;
  language: string;
  code: string;
  isFavourite:boolean;
};

type TagsType = {
  name: string;
  snippetsCount: number;
};

export const ContextProvider = ({ children }: ChildrenType) => {
  const { user, isSignedIn } = useUser();
  const [userId, setUserId] = useState<string | null>(null);
  const [quickLink, setQuickLink] = useState<quickLinksType[]>(quickLinks);
  const [secondaryLink, setSecondaryLink] =
    useState<secondaryLinkType[]>(secondaryLinks);
  const [themeSwitch, setThemeSwitch] = useState<themeArrayType[]>(themeArray);
  const [snippets, setSnippets] = useState<SnippetType[]>([]);

  const [tags, setTags] = useState<TagsType[]>([]);

  const [seeTagBar, setSeeTagBar] = useState<boolean>(false);

  const [newTagMenu, setNewTagMenu] = useState<boolean>(false);
  const [editingTags, setEditingTags] = useState<boolean>(false);
  const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);

  const startEditingTag = (index: number) => {
    setEditingTagIndex(index);
  };

  const updateTag = (index: number, newName: string) => {
    const updatedTags = tags.map((tag, i) =>
      i === index ? { ...tag, name: newName } : tag
    );
    setTags(updatedTags);
    setEditingTagIndex(null);
  };

  const cancelEditing = () => {
    setEditingTagIndex(null);
  };

  const showNewTagMenu = () => {
    setNewTagMenu(!newTagMenu);
    console.log(tags);
  };
  const addTags = (tag: TagsType) => {
    setTags((prevTag) => [...prevTag, tag]);
  };

  
  const handleEditing = () => {
    setEditingTags(true);
  };
  const deleteTag = (id: number) => {
    const updatedTag = tags.filter((_, i) => i !== id);
    setTags(updatedTag);
  };

  const tagsToggle = () => {
    setSeeTagBar(!seeTagBar);
  };

  const addSnippet = (snippet: SnippetType) => {
    setSnippets([...snippets, snippet]);
  };
  const FavoriteSnippet=()=>{
    
  }


  const deleteSnippet = (index: number) => {
    const updatedSnippets = snippets.filter((_, i) => i !== index);
    setSnippets(updatedSnippets);
  };
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (): void => {
    setShowForm(!showForm);
  };

  const setterTheme = (id: number): void => {
    const setting = themeArray.map((item) => {
      return item.id === id
        ? { ...item, IsActivated: true }
        : { ...item, IsActivated: false };
    });
    setThemeSwitch(setting);
  };

  const isLightThemeActive = (): boolean => {
    return themeSwitch.some(
      (item) => item.IsActivated && item.name === "light"
    );
  };

  const setterActive = (id: number): void => {
    const innerSetterActive = quickLink.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setQuickLink(innerSetterActive);
  };

  const setterSecondaryActive = (id: number): void => {
    const innerSetterActive = secondaryLink.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setSecondaryLink(innerSetterActive);
    setSeeTagBar(true);
  };

  useEffect(() => {
    if (user) {
      setUserId(user.id);
    } else {
      setUserId(null);
    }
  }, [user]);

  return (
    <Context.Provider
      value={{
        userId,
        isSignedIn: Boolean(isSignedIn),
        quickLink,
        secondaryLink,
        setterActive,
        setterSecondaryActive,
        setterTheme,
        themeSwitch,
        isLightThemeActive,
        languageOptions,
        toggleForm,
        showForm,
        snippets,
        addSnippet,
        deleteSnippet,
        tagsToggle,
        seeTagBar,
        addTags,
        showNewTagMenu,
        newTagMenu,
        tags,
        deleteTag,
        handleEditing,
        startEditingTag,
        updateTag,
        cancelEditing,
        editingTagIndex,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useApp = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Error In Context");
  }
  return context;
};