import * as React from 'react';
import {
    Autocomplete,
    Avatar,
    Button,
    Card,
    Collapse,
    ListItem,
    Paper,
    PaperProps,
    TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {AddCircleOutlined, ExpandLess, ExpandMore, RemoveCircleOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

// this should come from API calls
export const usersTestData : Array<userType> = [{"avatar": "faces/0.jpg", "name": "Anthony Albanese", "id": 0}, {"avatar": "faces/1.jpg", "name": "Katie Allen", "id": 1}, {"avatar": "faces/2.jpg", "name": "Anne Aly", "id": 2}, {"avatar": "faces/3.jpg", "name": "Karen Andrews", "id": 3}, {"avatar": "faces/4.jpg", "name": "Bridget Archer", "id": 4}, {"avatar": "faces/5.jpg", "name": "Adam Bandt", "id": 5}, {"avatar": "faces/6.jpg", "name": "Angie Bell", "id": 6}, {"avatar": "faces/7.jpg", "name": "Chris Bowen", "id": 7}, {"avatar": "faces/8.jpg", "name": "Russell Broadbent", "id": 8}, {"avatar": "faces/9.jpg", "name": "Scott Buchholz", "id": 9}, {"avatar": "faces/10.jpg", "name": "Tony Burke", "id": 10}, {"avatar": "faces/11.jpg", "name": "Linda Burney", "id": 11}, {"avatar": "faces/12.jpg", "name": "Josh Burns", "id": 12}, {"avatar": "faces/13.jpg", "name": "Mark Butler", "id": 13}, {"avatar": "faces/14.jpg", "name": "Terri Butler", "id": 14}, {"avatar": "faces/15.jpg", "name": "Anthony Byrne", "id": 15}, {"avatar": "faces/16.jpg", "name": "Jim Chalmers", "id": 16}, {"avatar": "faces/17.jpg", "name": "Darren Chester", "id": 17}, {"avatar": "faces/18.jpg", "name": "Lisa Chesters", "id": 18}, {"avatar": "faces/19.jpg", "name": "Jason Clare", "id": 19}, {"avatar": "faces/20.jpg", "name": "Sharon Claydon", "id": 20}, {"avatar": "faces/21.jpg", "name": "Libby Coker", "id": 21}, {"avatar": "faces/22.jpg", "name": "David Coleman", "id": 22}, {"avatar": "faces/23.jpg", "name": "Julie Collins", "id": 23}, {"avatar": "faces/24.jpg", "name": "Pat Conaghan", "id": 24}, {"avatar": "faces/25.jpg", "name": "Pat Conroy", "id": 25}, {"avatar": "faces/26.jpg", "name": "Mark Coulton", "id": 26}, {"avatar": "faces/27.jpg", "name": "Milton Dick", "id": 27}, {"avatar": "faces/28.jpg", "name": "Mark Dreyfus", "id": 28}, {"avatar": "faces/29.jpg", "name": "Peter Dutton", "id": 29}, {"avatar": "faces/30.jpg", "name": "Justine Elliot", "id": 30}, {"avatar": "faces/31.jpg", "name": "Warren Entsch", "id": 31}, {"avatar": "faces/32.jpg", "name": "Trevor Evans", "id": 32}, {"avatar": "faces/33.jpg", "name": "Jason Falinski", "id": 33}, {"avatar": "faces/34.jpg", "name": "Paul Fletcher", "id": 34}, {"avatar": "faces/35.jpg", "name": "Mike Freelander", "id": 35}, {"avatar": "faces/36.jpg", "name": "Josh Frydenberg", "id": 36}, {"avatar": "faces/37.jpg", "name": "Andrew Gee", "id": 37}, {"avatar": "faces/38.jpg", "name": "Steve Georganas", "id": 38}, {"avatar": "faces/39.jpg", "name": "Andrew Giles", "id": 39}, {"avatar": "faces/40.jpg", "name": "Dr David", "id": 40}, {"avatar": "faces/41.jpg", "name": "Ian Goodenough", "id": 41}, {"avatar": "faces/42.jpg", "name": "Patrick Gorman", "id": 42}, {"avatar": "faces/43.jpg", "name": "Luke Gosling", "id": 43}, {"avatar": "faces/44.jpg", "name": "Helen Haines", "id": 44}, {"avatar": "faces/45.jpg", "name": "Garth Hamilton", "id": 45}, {"avatar": "faces/46.jpg", "name": "Celia Hammond", "id": 46}, {"avatar": "faces/47.jpg", "name": "Andrew Hastie", "id": 47}, {"avatar": "faces/48.jpg", "name": "Alex Hawke", "id": 48}, {"avatar": "faces/49.jpg", "name": "Julian Hill", "id": 49}, {"avatar": "faces/50.jpg", "name": "Kevin Hogan", "id": 50}, {"avatar": "faces/51.jpg", "name": "Luke Howarth", "id": 51}, {"avatar": "faces/52.jpg", "name": "Ed Husic", "id": 52}, {"avatar": "faces/53.jpg", "name": "Stephen Jones", "id": 53}, {"avatar": "faces/54.jpg", "name": "Barnaby Joyce", "id": 54}, {"avatar": "faces/55.jpg", "name": "Bob Katter", "id": 55}, {"avatar": "faces/56.jpg", "name": "Ged Kearney", "id": 56}, {"avatar": "faces/57.jpg", "name": "Craig Kelly", "id": 57}, {"avatar": "faces/58.jpg", "name": "Matt Keogh", "id": 58}, {"avatar": "faces/59.jpg", "name": "Peter Khalil", "id": 59}, {"avatar": "faces/60.jpg", "name": "Catherine King", "id": 60}, {"avatar": "faces/61.jpg", "name": "Madeleine King", "id": 61}, {"avatar": "faces/62.jpg", "name": "Michelle Landry", "id": 62}, {"avatar": "faces/63.jpg", "name": "Julian Leeser", "id": 63}, {"avatar": "faces/64.jpg", "name": "Dr Andrew", "id": 64}, {"avatar": "faces/65.jpg", "name": "Sussan Ley", "id": 65}, {"avatar": "faces/66.jpg", "name": "David Littleproud", "id": 66}, {"avatar": "faces/67.jpg", "name": "Gladys Liu", "id": 67}, {"avatar": "faces/68.jpg", "name": "Nola Marino", "id": 68}, {"avatar": "faces/69.jpg", "name": "Richard Marles", "id": 69}, {"avatar": "faces/70.jpg", "name": "Fiona Martin", "id": 70}, {"avatar": "faces/71.jpg", "name": "Kristy McBain", "id": 71}, {"avatar": "faces/72.jpg", "name": "Emma McBride", "id": 72}, {"avatar": "faces/73.jpg", "name": "Michael McCormack", "id": 73}, {"avatar": "faces/74.jpg", "name": "Melissa McIntosh", "id": 74}, {"avatar": "faces/75.jpg", "name": "Brian Mitchell", "id": 75}, {"avatar": "faces/76.jpg", "name": "Rob Mitchell", "id": 76}, {"avatar": "faces/77.jpg", "name": "Scott Morrison", "id": 77}, {"avatar": "faces/78.jpg", "name": "Ben Morton", "id": 78}, {"avatar": "faces/79.jpg", "name": "Daniel Mulino", "id": 79}, {"avatar": "faces/80.jpg", "name": "Peta Murphy", "id": 80}, {"avatar": "faces/81.jpg", "name": "Shayne Neumann", "id": 81}, {"avatar": "faces/82.jpg", "name": "Ted O'Brien", "id": 82}, {"avatar": "faces/83.jpg", "name": "Llew O'Brien", "id": 83}, {"avatar": "faces/84.jpg", "name": "Brendan O'Connor", "id": 84}, {"avatar": "faces/85.jpg", "name": "Clare O'Neil", "id": 85}, {"avatar": "faces/86.jpg", "name": "Tony Pasin", "id": 86}, {"avatar": "faces/87.jpg", "name": "Alicia Payne", "id": 87}, {"avatar": "faces/88.jpg", "name": "Gavin Pearce", "id": 88}, {"avatar": "faces/89.jpg", "name": "Graham Perrett", "id": 89}, {"avatar": "faces/90.jpg", "name": "Fiona Phillips", "id": 90}, {"avatar": "faces/91.jpg", "name": "Keith Pitt", "id": 91}, {"avatar": "faces/92.jpg", "name": "Tanya Plibersek", "id": 92}, {"avatar": "faces/93.jpg", "name": "Melissa Price", "id": 93}, {"avatar": "faces/94.jpg", "name": "Rowan Ramsey", "id": 94}, {"avatar": "faces/95.jpg", "name": "Amanda Rishworth", "id": 95}, {"avatar": "faces/96.jpg", "name": "Stuart Robert", "id": 96}, {"avatar": "faces/97.jpg", "name": "Michelle Rowland", "id": 97}, {"avatar": "faces/98.jpg", "name": "Joanne Ryan", "id": 98}, {"avatar": "faces/99.jpg", "name": "Rebekha Sharkie", "id": 99}, {"avatar": "faces/100.jpg", "name": "Dave Sharma", "id": 100}, {"avatar": "faces/101.jpg", "name": "Bill Shorten", "id": 101}, {"avatar": "faces/102.jpg", "name": "Julian Simmonds", "id": 102}, {"avatar": "faces/103.jpg", "name": "David Smith", "id": 103}, {"avatar": "faces/104.jpg", "name": "Anne Stanley", "id": 104}, {"avatar": "faces/105.jpg", "name": "Zali Steggall", "id": 105}, {"avatar": "faces/106.jpg", "name": "James Stevens", "id": 106}, {"avatar": "faces/107.jpg", "name": "Michael Sukkar", "id": 107}, {"avatar": "faces/108.jpg", "name": "Meryl Swanson", "id": 108}, {"avatar": "faces/109.jpg", "name": "Angus Taylor", "id": 109}, {"avatar": "faces/110.jpg", "name": "Dan Tehan", "id": 110}, {"avatar": "faces/111.jpg", "name": "Susan Templeman", "id": 111}, {"avatar": "faces/112.jpg", "name": "Matt Thistlethwaite", "id": 112}, {"avatar": "faces/113.jpg", "name": "Phillip Thompson", "id": 113}, {"avatar": "faces/114.jpg", "name": "Kate Thwaites", "id": 114}, {"avatar": "faces/115.jpg", "name": "Alan Tudge", "id": 115}, {"avatar": "faces/116.jpg", "name": "Maria Vamvakinou", "id": 116}, {"avatar": "faces/117.jpg", "name": "Bert van", "id": 117}, {"avatar": "faces/118.jpg", "name": "Ross Vasta", "id": 118}, {"avatar": "faces/119.jpg", "name": "Andrew Wallace", "id": 119}, {"avatar": "faces/120.jpg", "name": "Tim Watts", "id": 120}, {"avatar": "faces/121.jpg", "name": "Anne Webster", "id": 121}, {"avatar": "faces/122.jpg", "name": "Anika Wells", "id": 122}, {"avatar": "faces/123.jpg", "name": "Lucy Wicks", "id": 123}, {"avatar": "faces/124.jpg", "name": "Andrew Wilkie", "id": 124}, {"avatar": "faces/125.jpg", "name": "Josh Wilson", "id": 125}, {"avatar": "faces/126.jpg", "name": "Rick Wilson", "id": 126}, {"avatar": "faces/127.jpg", "name": "Tim Wilson", "id": 127}, {"avatar": "faces/128.jpg", "name": "Jason Wood", "id": 128}, {"avatar": "faces/129.jpg", "name": "Ken Wyatt", "id": 129}, {"avatar": "faces/130.jpg", "name": "Terry Young", "id": 130}, {"avatar": "faces/131.jpg", "name": "Tony Zappia", "id": 131}, {"avatar": "faces/132.jpg", "name": "Trent Zimmerman", "id": 132}];
export const systemsTestData: Array<systemType> = [{id: 1, name: "Galaxy"},{id: 2, name: "Apollo"},{id: 3, name: "BPA Data Portal"}, {id: 4, name: "Fgenesh++"}];
// END of custom block

type systemType = {
    id: number,
    name: string
};

type dataType = {
    name: string,
    system: systemType,
    path: string
};

type userType = {
    id: number,
    name: string,
    avatar: string,
}

type projectType = {
    name: string,
    isOwner: boolean,
    systems : Array<systemType>,
    data: Array<dataType>,
    users: Array<userType>
};

interface collapsiblePaperType extends PaperProps {
    header: React.ReactNode
}

export const CollapsiblePaper = ( {header, children, ...rest} : collapsiblePaperType) => {
    const [opened, setOpened] = React.useState<boolean>(true);


    return(<Paper {...rest}>
        <Box sx={{display: "flex", position: "relative", alignItems: "center"}}>
            <Box sx={{flexGrow: 1}}>{header}</Box>
            <IconButton onClick={() => setOpened(!opened)}>{opened?<ExpandLess/>:<ExpandMore/>}</IconButton>
        </Box>
        <Collapse in={opened}>
            {children}
        </Collapse>
    </Paper>);
}


export const projectTestData : projectType = {
    name: "Threatened Species Initiative",
    isOwner: true,
    systems: [{id: 1, name: "Galaxy"},{id: 2, name: "Apollo"}],
    data: [{name: "Threatened Species Initiative", system: {id: 3, name: "BPA Data Portal"}, path: "TSI"}],
    users: [{"avatar": "faces/54.jpg", "name": "Barnaby Joyce", "id": 54}]
}



export const User = ( user: userType) =>
<Box alignItems="center" sx={{position: "relative", display: "inline-flex"}}>
        <Avatar sx={{marginRight: 3}} alt={user.name} src={user.avatar} />
        <Typography noWrap>{user.name}</Typography>
</Box>

export const System = (system: systemType) =>
<Box>
    <Typography>{system.name}</Typography>
</Box>

export const Data = (data:dataType) =>
<Box>
    <Typography>{data.name}</Typography>
</Box>

export default function Project (project: projectType) {
    const [userSelection, setUserSelection] = React.useState<userType | null>(null);
    const [projectUsers, setProjectUsers] = React.useState<Array<userType>>(project.users)

    const [systemSelection, setSystemSelection] = React.useState<systemType | null>(null);
    const [projectSystems, setProjectSystems] = React.useState<Array<systemType>>(project.systems)

    return (
<Card variant="outlined" sx={{padding: 4}}>
    <Toolbar sx={{paddingLeft: 0, paddingRight: 0}}>
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" noWrap component="div">{project.name}</Typography>
        </Box>
        <Button variant={"outlined"}>{project.isOwner?"Owner":"Leave"}</Button>
    </Toolbar>

    <CollapsiblePaper header={<Typography>Systems:</Typography>}
                      elevation={2}
                      sx={{marginBottom: 2, marginTop: 4, padding: 2}} >
        <List sx={{width: "100%", maxWidth: 350, bgcolor: 'background.paper' }}>
            <ListItem secondaryAction={
                // @ts-ignore
                <IconButton disabled={systemSelection === null} onClick={() => {setProjectSystems([...projectSystems,systemSelection]);setSystemSelection(null)}}>
                    <AddCircleOutlined/>
                </IconButton>}>

                <Autocomplete id="users-add-field"
                              sx={{width:250}}
                              renderInput={(params) => <TextField {...params} label="System" />}
                              getOptionDisabled={(option) => projectSystems.find(x => x.id === option.id) !== undefined }
                              options={systemsTestData} getOptionLabel={(option) => option.name}
                              renderOption={(props, option) => (
                                  <Box component="li" {...props}>
                                      <System {...option} />
                                  </Box>)}
                              value={systemSelection}
                              onChange={(event: any, newValue: systemType | null) => {
                                  setSystemSelection(newValue);
                              }}/>
            </ListItem>
            {projectSystems.map((system) =>
                    <ListItem secondaryAction={
                        <IconButton onClick={() => (setProjectSystems(projectSystems.filter((val) => (val.id !== system.id ))))}>
                            <RemoveCircleOutlined/>
                        </IconButton>}>
                <System {...system} />
            </ListItem>
            )}
        </List>
    </CollapsiblePaper>
    <CollapsiblePaper header={<Typography>Data:</Typography>} elevation={2} sx={{marginBottom: 2, padding: 2}} >
        <List>
            {project.data.map((data) =>
            <ListItem>
                <Data {...data} />
            </ListItem>)}
        </List>
    </CollapsiblePaper>
    <CollapsiblePaper header={<Typography>Users:</Typography>} elevation={2} sx={{marginBottom: 2, padding: 2}} >
        <List sx={{width: "100%", maxWidth: 350, bgcolor: 'background.paper' }}>
            <ListItem secondaryAction={
                // @ts-ignore
                <IconButton disabled={userSelection === null} onClick={() => {setProjectUsers([...projectUsers,userSelection]);setUserSelection(null)}}>
                    <AddCircleOutlined/>
                </IconButton>}>

                <Autocomplete id="users-add-field"
                              sx={{width:250}}
                              renderInput={(params) => <TextField {...params} label="User" />}
                              getOptionDisabled={(option) => projectUsers.find(x => x.id === option.id) !== undefined }
                              options={usersTestData} getOptionLabel={(option) => option.name}
                              renderOption={(props, option) => (
                                  <Box component="li" {...props}>
                                      <User {...option} />
                                  </Box>)}
                              value={userSelection}
                              onChange={(event: any, newValue: userType | null) => {
                                  setUserSelection(newValue);
                              }}/>
            </ListItem>
            {projectUsers.map((user) =>
            <ListItem secondaryAction={
                <IconButton onClick={() => (setProjectUsers(projectUsers.filter((val) => (val.id !== user.id ))))}>
                    <RemoveCircleOutlined/>
                </IconButton>}>
                <User {...user} />
            </ListItem>)}
        </List>
    </CollapsiblePaper>
</Card>);
}
