#! /usr/bin/bash
git clone $1
cd $2
git log --all
cd ..
rm -rf $2