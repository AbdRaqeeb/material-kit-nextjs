'use client';

import { useState, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from '@/components/iconify';
import { PATH, PATH_AUTH } from '@/routes';

// ----------------------------------------------------------------------

export function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = useCallback(() => {
        router.push(PATH.dashboard);
    }, [router]);

    const renderForm = (
        <Box display='flex' flexDirection='column' alignItems='flex-end'>
            <TextField
                fullWidth
                name='email'
                label='Email address'
                defaultValue='hello@gmail.com'
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
            />

            <Link variant='body2' color='inherit' sx={{ mb: 1.5 }}>
                Forgot password?
            </Link>

            <TextField
                fullWidth
                name='password'
                label='Password'
                defaultValue='@demo1234'
                InputLabelProps={{ shrink: true }}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                            </IconButton>
                        </InputAdornment>
                    ) as ReactNode,
                }}
                sx={{ mb: 3 }}
            />

            <LoadingButton
                fullWidth
                size='large'
                type='submit'
                color='inherit'
                variant='contained'
                onClick={handleSignIn}
            >
                Login
            </LoadingButton>
        </Box>
    );

    return (
        <>
            <Box gap={1.5} display='flex' flexDirection='column' alignItems='center' sx={{ mb: 5 }}>
                <Typography variant='h5'>Login</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Don’t have an account?
                    <Link href={PATH_AUTH.register} component={NextLink} variant='subtitle2' sx={{ ml: 0.5 }}>
                        Get started
                    </Link>
                </Typography>
            </Box>

            {renderForm}

            <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
                <Typography variant='overline' sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}>
                    OR
                </Typography>
            </Divider>

            <Box gap={1} display='flex' justifyContent='center'>
                <IconButton color='inherit'>
                    <Iconify icon='logos:google-icon' />
                </IconButton>
                <IconButton color='inherit'>
                    <Iconify icon='eva:github-fill' />
                </IconButton>
                <IconButton color='inherit'>
                    <Iconify icon='ri:twitter-x-fill' />
                </IconButton>
            </Box>
        </>
    );
}
