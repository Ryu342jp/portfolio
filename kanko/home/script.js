
function findMatchingCourse() {
    // Get selected values from the form
    var arrivalTime = document.getElementById('arrivalTime').value;
    var departureTime = document.getElementById('departureTime').value;
    var activities = document.getElementById('activities').value;

    // Sample courses data
    var sampleCourses = {
        'shopping':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../macthing/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/shopping/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/shopping/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/shopping/12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/shopping/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/shopping/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/shopping/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/shopping/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/shopping/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/shopping/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/shopping/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/shopping/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/shopping/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/shopping/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/shopping/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/shopping/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/shopping/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/shopping/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/shopping/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/shopping/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shopping/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shopping/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/shopping/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/shopping/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/shopping/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            } ,
        'activity':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../macthing/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/activity/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/activity/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/activity12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/activity/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/activity/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/activity/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/sactivity/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/activity/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/activity/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/activity/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/activity/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/activity/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/activity/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/activity/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/activity/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/activity/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/activity/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/activity/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/activity/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/activity/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/activity/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/activity/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/activity/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/activity/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/activity/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            } ,
        'historical':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../macthing/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/historical/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/historical/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/historical/12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/historical/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/shistorical/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/historical/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/historical/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/historical/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/historical/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/historical/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/historical/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/historical/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/shistorical/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/historical/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/historical/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/historical/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/historical/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/historical/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/historical/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/historical/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/historical/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/historical/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/historical/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/historical/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/historical/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/historical/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            } ,
        'anniversary':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/anniversary/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/anniversary/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/anniversary/12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/anniversary/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/anniversary/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/anniversary/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/anniversary/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/anniversary/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/anniversary/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/anniversary/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/anniversary/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/anniversary/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/anniversary/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/anniversary/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/anniversary/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/anniversary/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/anniversary/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/anniversary/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/anniversary/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/anniversary/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/anniversary/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/anniversary/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/anniversary/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/anniversary/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            } ,
        'food':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../macthing/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/food/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/food/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/food/12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/food/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/food/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/food/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/food/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/food/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/food/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/food/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/food/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/food/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/food/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/food/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/food/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/food/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/food/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/food/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/food/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/food/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/food/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/food/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/food/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/food/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            } ,
        'none':{
                /*'a6':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../macthing/" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a7':{
                    //'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/08and07to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/09and07to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/10and07to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/11and07to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/12and07to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/none/13and07to20/index.html" target="_blank">コース</a>'/*,
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a8':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',*/
                    'd16':'<a href="../matching/none/08and08to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/09and08to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/10and08to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/11and08to19/index.html" target="_blank">コース</a>',
                    //'d20':'<a href="../matching/none/12and08to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/13and08to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a9':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/06and09to15/index.html" target="_blank">コース</a>',*/
                    'd16':'<a href="../matching/none/07and09to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/08and09to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/09and09to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/10and09to19/index.html" target="_blank">コース</a>'/*,
                    'd20':'<a href="../matching/none/11and09to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/12and09to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/none/13and09to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                'a10':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/05and10to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/06and10to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/07and10to17/index.html" target="_blank">コース</a>',*/
                    'd18':'<a href="../matching/none/08and10to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/09and10to19/index.html" target="_blank">コース</a>',
                    /*'d20':'<a href="../matching/none/10and10to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/11and10to21/index.html" target="_blank">コース</a>',*/
                    'd22':'<a href="../matching/none/12and10to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a11':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/04and11to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/05and11to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/06and11to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/07and11to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/08and11to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/none/09and11to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/10and11to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/none/11and11to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a12':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/03and12to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/04and12to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/05and12to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/06and12to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/07and12to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/none/08and12to20/index.html" target="_blank">コース</a>',
                    //'d21':'<a href="../matching/none/09and12to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/none/10and12to22/index.html" target="_blank">コース</a>'/*,
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                },
                /*'a13':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/02and13to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/03and13to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/04and13to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/05and13to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/06and13to19/index.html" target="_blank">コース</a>',
                    'd20':'<a href="../matching/none/07and13to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/08and13to21/index.html" target="_blank">コース</a>',
                    'd22':'<a href="../matching/none/09and13to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },*/
                'a14':{
                    /*'d14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="../matching/none/01and14to15/index.html" target="_blank">コース</a>',
                    'd16':'<a href="../matching/none/02and14to16/index.html" target="_blank">コース</a>',
                    'd17':'<a href="../matching/none/03and14to17/index.html" target="_blank">コース</a>',
                    'd18':'<a href="../matching/none/04and14to18/index.html" target="_blank">コース</a>',
                    'd19':'<a href="../matching/none/05and14to19/index.html" target="_blank">コース</a>',*/
                    'd20':'<a href="../matching/none/06and14to20/index.html" target="_blank">コース</a>',
                    'd21':'<a href="../matching/none/07and14to21/index.html" target="_blank">コース</a>'/*,
                    'd22':'<a href="../matching/none/08and14to22/index.html" target="_blank">コース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'*/
                }/*,
                'a15':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a16':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a17':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                },
                'a18':{
                    'd14':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd15':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd16':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd17':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd18':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd19':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd20':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd21':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd22':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>',
                    'd23':'<a href="course/course.html" target="_blank">友達向けショッピングコース</a>'
                }
                */
            }
    };


    // Get the matching course
    var matchedCourse = sampleCourses[activities][arrivalTime][departureTime];

    // Check if a course is found
    if (matchedCourse) {
        // Display the result
        document.getElementById('result').innerHTML = '<h2>おすすめコース:</h2>' + matchedCourse;
    } else {
        // Display an error message if no course is found
        document.getElementById('result').innerHTML = '<h2>一致するコースが見つかりませんでした。</h2>';
    }
}
