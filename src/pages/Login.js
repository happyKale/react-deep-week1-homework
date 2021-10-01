import React from 'react';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Input from '../elements/Input';

const Login = (props) => {

    return (
        <React.Fragment>
            <Grid marginTop="30px">
                <Text size="30px" bold="bold" paddingLeft="50px">
                    회원가입
                </Text>
                <Grid width="300px" margin="auto" marginTop="20px">
                    <Grid height="60px">
                        <Input labelSize="14px" height="30px" placeholder="아이디를 입력하세요.">
                            아이디
                        </Input>
                    </Grid>
                    <Grid height="60px">
                        <Input labelSize="14px" height="30px" placeholder="비밀번호를 입력하세요.">
                            비밀번호
                        </Input>
                    </Grid>
                </Grid>
                <Grid width="300px" margin="auto" marginTop="20px">
                    <Button width="100%">
                        로그인
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Login;