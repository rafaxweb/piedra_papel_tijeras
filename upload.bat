set /p id="Comentario: "
git add .
git commit -m "%id%"
git push -u origin main
pause