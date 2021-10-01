import React from 'react';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import {useHistory} from 'react-router';

const Header = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Grid width="400px" height="50px" is_flex>
                <Grid width="100px" is_flex>
                    <Button width="50px"
                        onClick={() => {
                            history.push("/")
                        }}>홈</Button>
                </Grid>
                <Grid is_flex width="190px">
                    <Button width="90px"
                        onClick={() => {
                            history.push("/sign-up");
                        }}>회원가입</Button>
                    <Button width="90px"
                        onClick={() => {
                            history.push("/login");
                        }}>로그인</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Header;