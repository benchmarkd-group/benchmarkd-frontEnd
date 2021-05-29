import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon'
import CourseRatings from '../../Course_Cards/Card_Elements/courseCardRatings/CourseCard_Ratings'
import image from '../../../images/bg.png'
import ReviewComponent from '../CourseReviewComponent/CourseReviewComponent'
import json from '../../../jsons/coursedetails.json'
import CourseRatingComponent from '../CourseRatingComponent/CourseRatingComponent';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: '100%',
    backgroundAttachment: 'fixed'
  },
  hide: {
    display: 'none',
  },
  drawerRoot:{
    backgroundColor: 'rgba(255,255,255,0)'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX:'hidden'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerOptions: {
    color:'white',
    textDecoration: 'none'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  contentContainerDiv: {
    padding: theme.spacing(3),
    border: 'double',
    height: 'fit-content',
    width: window.screen.width*0.7+'px',
    padding: '50px',
    flexShrink: '1'
  },
  contentDiv:{
    width: '100%',
    height: '100%'
  },
  expandedCourseHeader: {
    border: 'double',
    minWidth: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
    paddingTop: '30px',
    background: '#26043e'
  },
  contractedCourseHeader: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '1200',
    border:'double',
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#26043e',
    paddingLeft: '30px',
    padding: '10px 0px 10px 0px'
  },
  contractedHeaderCourseName: {
    height:'50%',
    color: 'white',
    fontSize:'1.4rem',
    marginRight: '10px'
  },
  contractedHeaderCourseNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    alignItems: 'center'
  },
  contractedHeaderInstiNameContainer: {
    height:'50%',
    color: 'white'
  },
  headerCourseNameDiv: {
    height:'fit-content',
    width:'70%',
    fontSize: '2em',
    fontWeight: 800,
    color:'white'
  },
  headerInstiNameDiv: {
    height:'fit-content',
    width:'70%',
    fontSize: '1.2em',
    fontWeight: 600,
    color:'white'
  },
  headerRatingsDiv: {
    height:'fit-content',
    width:'70%',
    marginTop: '1em'
  },
  headerSummaryDiv: {
    height:'fit-content',
    width:'70%',
    marginTop: '1em',
    marginBottom: '1em',
    color: 'white'
  },
  sectionHeader: {
    color:'white',
    marginRight: '20px',
    width:'fit-content',
    whiteSpace: 'nowrap'
  },
  textContent: {
    color:'white'
  },
  sectionHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px'
  },
  sectionHeaderDivider: {
    width: '100%',
    height: '1px',
    background: 'white',
    opacity:'0.5'
  },
  contentSections: {
    marginBottom: '50px'
  },
  iconColorTransition: {
    transitionProperty: 'fill',
    transitionDuration: '500ms'
  },
  listRoot: {
    columns: '1 !important'
  }
}));

function DescriptionIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 26 26">
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M10.092 4.3508H26.0154C26.658 4.3508 27.089 3.7199 27.089 3.06724C27.089 2.41458 26.658 1.78368 26.0154 1.78368H10.092C9.44937 1.78368 9.01843 2.41458 9.01843 3.06724C9.01843 3.7199 9.44937 4.3508 10.092 4.3508Z" fill={props.color}/>
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M10.092 12.5647H26.0154C26.658 12.5647 27.089 11.9338 27.089 11.2812C27.089 10.6285 26.658 9.99762 26.0154 9.99762H10.092C9.44937 9.99762 9.01843 10.6285 9.01843 11.2812C9.01843 11.9338 9.44937 12.5647 10.092 12.5647Z" fill={props.color}/>
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M10.092 20.7787H26.0154C26.658 20.7787 27.089 20.1478 27.089 19.4951C27.089 18.8425 26.658 18.2116 26.0154 18.2116H10.092C9.44937 18.2116 9.01843 18.8425 9.01843 19.4951C9.01843 20.1478 9.44937 20.7787 10.092 20.7787Z" fill={props.color}/>
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M0.75 3.06712C0.75 4.34684 1.78741 5.38425 3.06712 5.38425C4.34684 5.38425 5.38425 4.34684 5.38425 3.06712C5.38425 1.78741 4.34684 0.75 3.06712 0.75C1.78741 0.75 0.75 1.78741 0.75 3.06712Z" fill={props.color}/>
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M0.75 11.2815C0.75 12.5612 1.78741 13.5986 3.06712 13.5986C4.34684 13.5986 5.38425 12.5612 5.38425 11.2815C5.38425 10.0018 4.34684 8.96436 3.06712 8.96436C1.78741 8.96436 0.75 10.0018 0.75 11.2815Z" fill={props.color}/>
        <path className={useStyles().iconColorTransition} fill-rule="evenodd" clip-rule="evenodd" d="M0.75 19.4954C0.75 20.7751 1.78741 21.8125 3.06712 21.8125C4.34684 21.8125 5.38425 20.7751 5.38425 19.4954C5.38425 18.2157 4.34684 17.1783 3.06712 17.1783C1.78741 17.1783 0.75 18.2157 0.75 19.4954Z" fill={props.color}/>
      </SvgIcon>
    );
  }

function ScheduleIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 26 26">
        <path className={useStyles().iconColorTransition} d="M16.8696 14.9483L13.4011 12.2912V6.87866C13.4011 6.33443 12.9704 5.89453 12.4376 5.89453C11.9048 5.89453 11.4741 6.33443 11.4741 6.87866V12.7833C11.4741 13.0933 11.6167 13.3856 11.8595 13.5706L15.7134 16.5229C15.8868 16.6558 16.0892 16.7198 16.2905 16.7198C16.5844 16.7198 16.8734 16.5849 17.0623 16.3251C17.3822 15.8911 17.2955 15.274 16.8696 14.9483Z" fill={props.color} fillOpacity="0.8"/>
        <path className={useStyles().iconColorTransition} d="M12.4384 0C5.57945 0 0 5.69894 0 12.7048C0 19.7106 5.57945 25.4096 12.4384 25.4096C19.2974 25.4096 24.8768 19.7106 24.8768 12.7048C24.8768 5.69894 19.2974 0 12.4384 0ZM12.4384 23.4414C6.64313 23.4414 1.92693 18.6242 1.92693 12.7048C1.92693 6.7854 6.64313 1.9682 12.4384 1.9682C18.2347 1.9682 22.9499 6.7854 22.9499 12.7048C22.9499 18.6242 18.2337 23.4414 12.4384 23.4414Z" fill={props.color} fillOpacity="0.8"/>
      </SvgIcon>
    );
  }

function SampleResourcesIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 30 30">
        <path className={useStyles().iconColorTransition} d="M20.0396 15.9775C20.0396 16.3823 20.4956 16.6193 20.8269 16.3867L24.985 13.4667C25.2686 13.2676 25.2686 12.8475 24.985 12.6484L20.8269 9.72843C20.4956 9.49577 20.0396 9.73276 20.0396 10.1376V15.9775ZM21.2842 12.5994C21.2842 12.1945 21.7402 11.9575 22.0715 12.1902L22.724 12.6484C23.0075 12.8475 23.0075 13.2676 22.724 13.4667L22.0715 13.9249C21.7402 14.1576 21.2842 13.9206 21.2842 13.5157V12.5994Z" fill={props.color} fillOpacity="0.8"/>
        <path className={useStyles().iconColorTransition} d="M21.2842 12.5994C21.2842 12.1945 21.7402 11.9575 22.0715 12.1902L22.724 12.6484C23.0075 12.8475 23.0075 13.2676 22.724 13.4667L22.0715 13.9249C21.7402 14.1576 21.2842 13.9206 21.2842 13.5157V12.5994Z" fill={props.color} fillOpacity="0.8"/>
        <path className={useStyles().iconColorTransition} d="M15.1674 3.52376C14.885 3.38479 10.7988 0 4.39453 0H3.51562V3.03965C1.65117 3.32327 0.404355 3.69247 0 3.78769V23.9768C0.614707 23.8919 6.7899 21.656 14.7868 23.6979L15 23.7523L15.2132 23.6979C23.2192 21.6535 29.3825 23.8915 30 23.9768V3.78769C29.5928 3.73239 23.2263 1.5812 15.1674 3.52376ZM1.75781 21.6995V5.19844C2.33918 5.0654 2.92658 4.95103 3.51562 4.85569V20.1338H4.39453C6.28939 20.1338 8.18801 20.4735 9.97307 21.1152C7.22625 20.9258 4.45564 21.1202 1.75781 21.6995ZM14.1211 21.1615C11.4899 19.4941 8.39631 18.5158 5.27344 18.3603V1.81963C10.5645 2.11032 13.8506 4.83163 14.1211 4.9691V21.1615ZM28.2422 21.6995C24.1761 20.8265 19.9449 20.8265 15.8789 21.6995V5.19844C19.9378 4.26935 24.1833 4.26935 28.2422 5.19844V21.6995Z" fill={props.color} fillOpacity="0.8"/>
      </SvgIcon>
    );
  }

function RatingsIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 26 26">
        <path className={useStyles().iconColorTransition} d="M24.4166 11.6938C24.9071 11.2055 25.0802 10.4888 24.8686 9.82345C24.6569 9.15811 24.1044 8.68232 23.4266 8.58176L17.4999 7.70212C17.3836 7.68488 17.283 7.61025 17.231 7.50251L14.5805 2.01706C14.2774 1.38971 13.6636 1 12.9787 1C12.2937 1 11.68 1.38971 11.3769 2.01706L8.72639 7.50256C8.67428 7.61025 8.57376 7.68488 8.45738 7.70217L2.53077 8.58176C1.85298 8.68232 1.30051 9.15811 1.0888 9.82345C0.87708 10.4888 1.05028 11.2055 1.5408 11.6938L5.82937 15.9636C5.91354 16.0475 5.952 16.1683 5.93211 16.2867L4.91971 22.3158C4.80396 23.0053 5.07619 23.689 5.6303 24.1003C6.1844 24.5116 6.90536 24.5647 7.51153 24.2392L12.8124 21.3927C12.9166 21.3368 13.0408 21.3368 13.145 21.3927L18.446 24.2392C18.7096 24.3808 18.9949 24.4508 19.2789 24.4507C19.6476 24.4507 20.014 24.3327 20.327 24.1002C20.8811 23.6889 21.1534 23.0052 21.0376 22.3157L20.0252 16.2866C20.0054 16.1682 20.0438 16.0475 20.128 15.9636L24.4166 11.6938ZM18.6169 16.5335L19.6293 22.5627C19.6632 22.7644 19.5412 22.8795 19.4872 22.9195C19.4331 22.9595 19.2883 23.0426 19.111 22.9472L13.81 20.1007C13.5498 19.961 13.2643 19.8911 12.9788 19.8911C12.6933 19.8911 12.4077 19.961 12.1476 20.1006L6.84664 22.9471C6.66921 23.0424 6.52441 22.9594 6.4704 22.9194C6.41638 22.8794 6.29439 22.7643 6.3283 22.5626L7.3407 16.5335C7.44011 15.9415 7.24812 15.3378 6.82696 14.9185L2.53839 10.6487C2.39486 10.5057 2.42735 10.3394 2.44803 10.2746C2.46861 10.2097 2.53807 10.0556 2.73641 10.0262L8.66296 9.1466C9.24484 9.06025 9.74768 8.68719 10.008 8.14851L12.6584 2.66301C12.7472 2.47945 12.912 2.45962 12.9788 2.45962C13.0455 2.45962 13.2104 2.47939 13.2992 2.66301V2.66306L15.9496 8.14856C16.2099 8.68724 16.7127 9.06031 17.2945 9.14665L23.2212 10.0263C23.4195 10.0557 23.4889 10.2098 23.5096 10.2747C23.5302 10.3395 23.5627 10.5059 23.4192 10.6487L19.1306 14.9186C18.7095 15.3378 18.5175 15.9415 18.6169 16.5335Z" fill={props.color} fillOpacity="0.8"/>
      </SvgIcon>
    );
  }

function AchievementsIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 29 29">
        <path className={useStyles().iconColorTransition} fillRule="evenodd" clipRule="evenodd" d="M27.8311 2.65427H23.7179C23.7245 2.38065 23.7282 2.10505 23.7282 1.82713C23.7282 1.37034 23.3656 1 22.9184 1H6.72253C6.27531 1 5.91274 1.37034 5.91274 1.82713C5.91274 2.10505 5.91641 2.38065 5.923 2.65427H1.80979C1.36257 2.65427 1 3.0246 1 3.4814V5.57648C1 10.2044 4.59624 13.9957 9.10133 14.2232C10.0402 15.531 11.1463 16.4776 12.3772 17.0181C12.2673 19.2551 11.5288 21.0668 10.9014 22.2259C10.155 23.6052 9.39534 24.3955 9.38907 24.402C9.24083 24.5534 9.15191 24.7662 9.15191 24.9869V27.5786V28.2918C9.15191 28.8115 9.56442 29.2328 10.0733 29.2328H19.5676C20.0765 29.2328 20.489 28.8115 20.489 28.2918V27.5786V24.9869C20.489 24.777 20.4068 24.5603 20.2518 24.4021C20.223 24.3726 17.4814 21.5207 17.2635 17.0182C18.4945 16.4776 19.6007 15.531 20.5396 14.2232C25.0447 13.9957 28.6409 10.2044 28.6409 5.57648V3.4814C28.6409 3.0246 28.2783 2.65427 27.8311 2.65427ZM2.61959 4.30854V5.57648C2.61959 8.91336 4.93446 11.7122 8.02209 12.4114C6.80708 9.95764 6.21334 7.0721 6.00457 4.30854H2.61959ZM10.7715 25.814V27.5786H18.8694V25.814L18.0012 24.1598C16.9823 22.6378 15.6303 19.9575 15.6303 16.4509C15.6303 16.0913 15.8578 15.7728 16.1931 15.6632C18.1247 15.0315 19.4726 13.1933 20.3317 11.3354C21.407 9.01024 22.0134 6.02291 22.0983 2.65427H7.54269C7.62761 6.02291 8.23393 9.01024 9.30912 11.3354C10.1769 13.212 11.5276 15.0352 13.4478 15.6632C13.7832 15.7728 14.0107 16.0913 14.0107 16.4509C14.0107 19.9575 12.6586 22.6378 11.6398 24.1598L10.7715 25.814ZM21.6188 12.4114C24.7065 11.7122 27.0213 8.91336 27.0213 5.57648V4.30848H23.6363C23.4276 7.07216 22.8338 9.95764 21.6188 12.4114Z" fill={props.color} fillOpacity="0.8"/>
      </SvgIcon>
    );
  }

function ContactsIcon(props) {
    return (
      <SvgIcon {...props} viewBox="0 0 27 27">
        <path className={useStyles().iconColorTransition} d="M23.7798 18.3828L19.5123 15.4769C18.5184 14.8001 17.1839 14.9351 16.3393 15.7978L15.2164 16.9447C14.5574 16.8471 12.991 16.4466 11.3839 14.8052C9.7769 13.1638 9.38489 11.5639 9.28933 10.8906L10.4122 9.74377C11.2569 8.88104 11.389 7.51801 10.7264 6.50282L7.88135 2.14395C7.46179 1.50113 6.78948 1.0888 6.03681 1.01272C5.28387 0.936403 4.54568 1.20615 4.01089 1.75245L2.23224 3.56913C1.38463 4.43483 0.938086 5.61714 1.00693 6.81281C1.14105 9.14165 2.12858 13.8272 7.23497 19.043C12.3413 24.2587 16.9288 25.2674 19.2087 25.4044C20.3779 25.4746 21.5358 25.0196 22.3844 24.1528L24.163 22.3361C24.6978 21.7898 24.9618 21.0356 24.8873 20.2668C24.8128 19.4981 24.4091 18.8114 23.7798 18.3828ZM22.9776 21.1254L21.199 22.942C20.6897 23.4622 20.0001 23.7367 19.3072 23.695C17.2648 23.5723 13.1346 22.6474 8.42038 17.8322C3.70611 13.017 2.80067 8.79833 2.68047 6.71224C2.63973 6.00442 2.90841 5.30013 3.4176 4.77998L5.19625 2.96324C5.57138 2.58008 6.1939 2.64555 6.48638 3.09372L9.33141 7.4526C9.55226 7.79102 9.50822 8.24536 9.22669 8.53292L7.82764 9.96192C7.67045 10.1225 7.5821 10.3402 7.5821 10.5674C7.5821 10.6807 7.61183 13.374 10.1985 16.016C12.785 18.658 15.4219 18.6884 15.5328 18.6884C15.7552 18.6884 15.9683 18.5981 16.1256 18.4376L17.5246 17.0086C17.8061 16.7209 18.2509 16.676 18.5823 16.9016L22.8498 19.8075C23.2904 20.1075 23.3513 20.7437 22.9776 21.1254Z" fill={props.color} fillOpacity="0.8"/>
      </SvgIcon>
    );
  }


export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const [contentDivHeight, setContentDivHeight] = React.useState(0)
  const headerRef = React.useRef()
  const descSectionRef = React.useRef()
  const scheduleSectionRef = React.useRef()
  const resourcesSectionRef = React.useRef()
  const ratingsSectionRef = React.useRef()
  const achievementsSectionRef = React.useRef()
  const contactSectionRef = React.useRef()
  var timer = null
  const [selectedArray, setSelection] = React.useState([1,0,0,0,0,0])
  const sections = [descSectionRef, scheduleSectionRef, resourcesSectionRef,ratingsSectionRef,achievementsSectionRef,contactSectionRef]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleScroll = (event) => {
    const element = headerRef.current.getBoundingClientRect()
    const height = element.height
    const bottom = element.bottom
    if ((1-(bottom/height))<=1.5){
      setOpacity(1-(bottom/height))
    }

    if(contentDivHeight === 0){
      setContentDivHeight(contactSectionRef.current.getBoundingClientRect().height)
    }

    // Changing nav bar selection on scroll
    let cur = []
    let select = [0,0,0,0,0,0]
    let fromTop = window.pageYOffset+window.screen.height*0.2
    if(timer !== null){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      sections.map((item) => {
        if(item.current.offsetTop < fromTop) {
          cur.push(item)
        }
      } )
      if(cur.length === 0)
        cur.push(descSectionRef)
      if(selectedArray[cur.length-1] != 1){
        select[cur.length-1] = 1
        setSelection(select)
      }
    }, 700)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleNavClick(option) {
    if(option === 'description'){
      setSelection([1,0,0,0,0,0])
      window.scrollTo(0, descSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
    else if(option === 'schedule'){
      setSelection([0,1,0,0,0,0])
      window.scrollTo(0, scheduleSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
    else if(option === 'resources'){
      setSelection([0,0,1,0,0,0])
      window.scrollTo(0, resourcesSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
    else if(option === 'ratings') {
      setSelection([0,0,0,1,0,0])
      window.scrollTo(0, ratingsSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
    else if(option === 'achievements') {
      setSelection([0,0,0,0,1,0])
      window.scrollTo(0, achievementsSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
    else if(option === 'contact') {
      setSelection([0,0,0,0,0,1])
      window.scrollTo(0, contactSectionRef.current.offsetTop-(window.screen.height*0.1))
    }
  }

  return (
    <div className={classes.root} style={{ backgroundImage: 'url('+image+')' }}>
      <CssBaseline />
      <div className={classes.contractedCourseHeader} style={{ opacity: opacity}}>
        <div className={classes.contractedHeaderCourseNameContainer}>
          <div className={classes.contractedHeaderCourseName}>{json.courseName}</div>
          <div style={{ height:'1rem', width:'1px', marginRight:'10px', backgroundColor: 'white'}}></div>
          <div style={{ fontSize:'1rem', color:'white'}}><FontAwesomeIcon style={{ marginRight:'5px'}} icon={faStar}></FontAwesomeIcon>{json.ratings.overallRating}</div>
        </div>
        <div className={classes.contractedHeaderInstiNameContainer}>{json.instiName}</div>
      </div>
      <Drawer
        variant="permanent"
        onMouseOver={handleDrawerOpen}
        onMouseOut={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawerRoot, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })
        }}
      >
        <div style={{ height: '15%' }}></div>
        <List classes={{
          root: classes.listRoot
        }}>
          <a className={classes.drawerOptions} onClick={() => handleNavClick("description")}>
            <ListItem button key='Description'>
              <ListItemIcon>{DescriptionIcon({color: selectedArray[0]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Description' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[0]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>
          <a className={classes.drawerOptions} onClick={() => handleNavClick("schedule")}>
            <ListItem button key='Schedule'>
              <ListItemIcon>{ScheduleIcon({color: selectedArray[1]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Schedule' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[1]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>
          <a className={classes.drawerOptions} onClick={() => handleNavClick("resources")}>
            <ListItem button key='Sample Resources'>
              <ListItemIcon>{SampleResourcesIcon({color: selectedArray[2]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Sample Resources' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[2]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>  
          <a className={classes.drawerOptions} onClick={() => handleNavClick("ratings")}>
            <ListItem button key='Ratings & Reviews'>
              <ListItemIcon>{RatingsIcon({color: selectedArray[3]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Ratings & Reviews' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[3]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>  
          <a className={classes.drawerOptions} onClick={() => handleNavClick("achievements")}>
            <ListItem button key='Achievements'>
              <ListItemIcon>{AchievementsIcon({color: selectedArray[4]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Achievements' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[4]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>  
          <a className={classes.drawerOptions} onClick={() => handleNavClick("contact")}>
            <ListItem button key='Contact'>
              <ListItemIcon>{ContactsIcon({color: selectedArray[5]===1?'#ffad62':'white'})}</ListItemIcon>
              <ListItemText primary='Contact' classes={{root: classes.drawerOptions}} style={{ color: selectedArray[5]===1?'#ffad62':'white'}}/>
            </ListItem>
          </a>
        </List>
      </Drawer>

      {/* Expanded header code */}
      <div style={{ background: 'rgba(255,255,255,0.2)',width:'100%', display: 'flex', flexDirection: 'column'}}>
        <div ref={headerRef} className={classes.expandedCourseHeader}>
          <div className={classes.headerCourseNameDiv}>
            {json.courseName}
          </div>
          <div className={classes.headerInstiNameDiv}>
            {json.instiName}
          </div>
          <div className={classes.headerRatingsDiv}>
            <CourseRatings rating={json.ratings.overallRating} numberOfRatings={json.ratings.totalNumberOfRatings}></CourseRatings>
          </div>
          <div className={classes.headerSummaryDiv}>{json.courseSummary}</div>
        </div>


{/* Content Display Code */}

        <div className={classes.contentContainerDiv}>
        <div className={classes.contentDiv}>

            <section id="description" className={classes.contentSections} ref={descSectionRef}>
              <div className={classes.sectionHeaderContainer}>
                <div style={{ width:'fit-content'}}>
                  <h1 className={classes.sectionHeader}>Description</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
              <p className={classes.textContent}>{json.courseDesc}</p>
                          
            </section>

            <section id="schedule" className={classes.contentSections} ref={scheduleSectionRef}> 
              <div className={classes.sectionHeaderContainer}>
                <div style={{ width:'fit-content'}}>
                  <h1 className={classes.sectionHeader}>Schedule</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
              <p className={classes.textContent}>{json.courseSchedule}</p>
            </section>

            <section id="sampleResources" className={classes.contentSections} ref={resourcesSectionRef}> 
              <div className={classes.sectionHeaderContainer}>
                <div style={{ width:'fit-content'}}>
                  <h1 className={classes.sectionHeader}>Sample Resources</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
              <p className={classes.textContent}>{json.courseSchedule}</p>
            </section>

            <section id="courseReview" className={classes.contentSections} ref={ratingsSectionRef}>
              <div className={classes.sectionHeaderContainer}>
                <div>
					        <h1 className={classes.sectionHeader}>Ratings & Reviews</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
              <div>
              <CourseRatingComponent 
                overallRating={json.ratings.overallRating} 
                totalNumberOfRatings={json.ratings.totalNumberOfRatings}
                ratingsDistribution={json.ratings.ratingsDistribution}
              ></CourseRatingComponent>
              </div>
               <div>
                <ReviewComponent userName={json.reviews[0].userName} rating={json.reviews[0].userRating} reviewDate={json.reviews[0].reviewDate} reviewContent={json.reviews[0].reviewContent}></ReviewComponent>
              </div>
            </section>

            <section id="achievements" className={classes.contentSections} ref={achievementsSectionRef}>
              <div className={classes.sectionHeaderContainer}>
                <div style={{ width:'fit-content'}}>
                  <h1 className={classes.sectionHeader}>Achievements</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
                <div>
                    
                </div>
            </section>

            <section id='contact' className={classes.contentSections} ref={contactSectionRef}>
              <div className={classes.sectionHeaderContainer}>
                <div style={{ width:'fit-content'}}>
                  <h1 className={classes.sectionHeader}>Contact Form</h1>
                </div>
                <div className={classes.sectionHeaderDivider}>
                </div>
              </div>
            </section>
            <section style={{ height: window.screen.height- (contentDivHeight *0.5) }}></section>

        </div>
        </div>
        </div>
      </div>
  );
}
