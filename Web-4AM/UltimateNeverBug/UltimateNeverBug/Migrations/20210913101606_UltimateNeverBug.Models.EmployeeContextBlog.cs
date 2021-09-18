using Microsoft.EntityFrameworkCore.Migrations;

namespace UltimateNeverBug.Migrations
{
    public partial class UltimateNeverBugModelsEmployeeContextBlog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    BlogID = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titlle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Desciprtion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Picture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.BlogID);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "BlogID", "Desciprtion", "Picture", "Titlle", "Type" },
                values: new object[] { 1L, "Hello Bob", "URL", "Hello", "Basketball" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");
        }
    }
}
