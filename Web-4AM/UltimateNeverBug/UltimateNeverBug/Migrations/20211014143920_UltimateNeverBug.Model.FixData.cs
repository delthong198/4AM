using Microsoft.EntityFrameworkCore.Migrations;

namespace UltimateNeverBug.Migrations
{
    public partial class UltimateNeverBugModelFixData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Desciprtion",
                table: "Videos",
                newName: "SourceId");

            migrationBuilder.RenameColumn(
                name: "Descrpitions",
                table: "Schedules",
                newName: "Descrpition");

            migrationBuilder.RenameColumn(
                name: "BlogID",
                table: "Blogs",
                newName: "BlogId");

            migrationBuilder.RenameColumn(
                name: "Desciprtion",
                table: "Blogs",
                newName: "Description");

            migrationBuilder.AddColumn<string>(
                name: "Descrpition",
                table: "Videos",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descrpition",
                table: "Videos");

            migrationBuilder.RenameColumn(
                name: "SourceId",
                table: "Videos",
                newName: "Desciprtion");

            migrationBuilder.RenameColumn(
                name: "Descrpition",
                table: "Schedules",
                newName: "Descrpitions");

            migrationBuilder.RenameColumn(
                name: "BlogId",
                table: "Blogs",
                newName: "BlogID");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Blogs",
                newName: "Desciprtion");
        }
    }
}
